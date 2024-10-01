import dayjs from "dayjs"
import { CalendarUtils } from "react-native-calendars"

function orderStartsAtAndEndsAt({ selectedDay }) {
  return {
    startsAt: selectedDay,
    endsAt: undefined,
    formatDatesInText: "",
    dates: getIntervalDates(selectedDay, selectedDay),
  }
}

function formatDatesInText({ startsAt }) {
  const formatted = `${startsAt.date()} de ${startsAt.format("MMMM")}`
  return formatted
}

function getIntervalDates(startsAt, endsAt) {
  const start = dayjs(startsAt.dateString)
  const end = dayjs(endsAt.dateString)

  let currentDate = start
  const datesArray = []

  while (currentDate.isBefore(end) || currentDate.isSame(end)) {
    datesArray.push(currentDate.format("YYYY-MM-DD"))
    currentDate = currentDate.add(1, "day")
  }

  let interval = {}

  datesArray.forEach((date) => {
    interval = {
      ...interval,
      [date]: {
        selected: true,
      },
    }
  })

  return interval
}

export const calendarUtils = {
  orderStartsAtAndEndsAt,
  formatDatesInText,
  dateToCalendarDate: CalendarUtils.getCalendarDateString,
}
