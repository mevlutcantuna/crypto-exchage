import moment from "moment"

export const changeDateFormat = (date) => {
    return moment(date).format("DD/MM/YYYY h:mm");
}