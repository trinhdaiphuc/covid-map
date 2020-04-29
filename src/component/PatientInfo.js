import React from "react";
import moment from "moment";

const PatientInfo = ({ name, address, note, verifyDate }) => {
  const newDate = moment(new Date(verifyDate));
  const formatDate = newDate.format("DD/MM/YYYY");
  return (
    <ul>
      <li>Tên: {name}</li>
      <li>Địa chỉ: {address}</li>
      <li>Ghi chú: {note}</li>
      <li>Ngày xác nhận: {formatDate}</li>
    </ul>
  );
};

export default PatientInfo;
