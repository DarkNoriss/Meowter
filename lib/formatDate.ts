import { format } from "date-fns"

export const formatDateProfile = (dateString: Date) => {
  const formatedDate = format(new Date(dateString), "MMMM yyyy")
  return formatedDate
}

export const formatDateMeow = (dateString: string) => {
  const formatedDate = dateString
  return formatedDate
}
