import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-tw";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import React from "react";
type CalendarProps = {
  onChange: (value: any) => void;
  data: { date: string; dayBonus: boolean; canTakeCase: boolean }[];
};
/**
 *
 * @component
 * @example
 * // 使用示例
 *      <CalendarTx
        onChange={(value) => {
          console.log(value);
        }}
        data={rmdata}
 */
export default function ({ data, onChange }: CalendarProps) {
  const [selectMonth, setSelectMonth] = useState(dayjs().format("YYYY/MM"));
  const [days, setDays] = useState([]);
  const [selectDay, setSelectDay] = useState();
  useEffect(() => {
    let calendardays: any = [];
    let monthStartDayOfWeek = dayjs(selectMonth)
      .startOf("M")
      .locale("zh-tw")
      .day();
    if (monthStartDayOfWeek === 0) monthStartDayOfWeek = 7;
    for (let i = monthStartDayOfWeek - 1; i > 0; i--) {
      let day = dayjs(selectMonth)
        .startOf("M")
        .subtract(i, "day")
        .format("YYYY/MM/DD");
      calendardays.push({
        day,
        text: dayjs(day).format("D"),
        dayBonus: false,
        canTakeCase: false,
      });
    }
    for (let i = 0; i <= 35 - monthStartDayOfWeek; i++) {
      let day = dayjs(selectMonth)
        .startOf("M")
        .add(i, "day")
        .format("YYYY/MM/DD");
      calendardays.push({
        day,
        text: dayjs(day)
          .subtract(1, "M")
          .isSame(dayjs(selectMonth).startOf("M"))
          ? dayjs(day).format("M/D")
          : dayjs(day).format("D"),
        dayBonus: false,
        canTakeCase: false,
      });
    }

    data.forEach((ele) => {
      const target = calendardays.find((fi: any) => fi.day === ele.date);
      if (target) {
        target.dayBonus = ele.dayBonus;
        target.canTakeCase = ele.canTakeCase;
      }
    });
    // @ts-ignore
    setDays(calendardays);
  }, [selectMonth]);
  useEffect(() => {
    if (onChange && selectDay) {
      onChange(selectDay);
    }
  }, [selectDay]);
  return (
    <div className="mx-auto max-w-[700px] ">
      <div className="my-2 grid grid-cols-7 justify-items-center">
        <div
          onClick={() => {
            setSelectMonth(
              dayjs(selectMonth).subtract(1, "M").format("YYYY/MM")
            );
          }}
        >
          <HiOutlineChevronLeft className="cursor-pointer text-3xl text-primary" />
        </div>
        <div className="col-span-3 col-start-3 text-xl font-bold">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            key={selectMonth}
            // @ts-ignore
          >
            {selectMonth.substring(0, 4)} {selectMonth.substring(5, 7)}月
          </motion.div>
        </div>
        <div
          onClick={() => {
            setSelectMonth(dayjs(selectMonth).add(1, "M").format("YYYY/MM"));
          }}
          className="col-start-7"
        >
          <HiOutlineChevronRight className=" cursor-pointer text-3xl text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-7 justify-items-center ">
        <div className="flex min-h-[50px] min-w-[50px]  items-center justify-center text-center">
          週一
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週二
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週三
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週四
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週五
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週六
        </div>
        <div className="flex min-h-[50px] min-w-[50px] items-center justify-center text-center">
          週日
        </div>

        {days.map((day) => (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-h-[50px] min-w-[50px] cursor-pointer select-none text-center"
            // @ts-ignore
            key={day.day}
            onClick={() => {
              // @ts-ignore
              if (dayjs(day.day).isBefore(dayjs(), "day") || !day.canTakeCase)
                return;
              // @ts-ignore
              setSelectDay(day.day);
            }}
          >
            <div
              className={`${
                // @ts-ignore
                selectDay === day.day ? "bg-primary text-white" : ""
              } m-auto flex h-10 w-10 items-center justify-center rounded-full text-center  ${
                // @ts-ignore
                dayjs(day.day).isBefore(dayjs(), "day") || !day.canTakeCase
                  ? "text-gray-300"
                  : " hover:bg-primaryhover active::bg-primaryhover"
              }`}
            >
              {
                // @ts-ignore
                day.text
              }
            </div>

            {
              // @ts-ignore
              day.dayBonus && (
                <div className="mx-auto my-2 h-2 w-2 rounded-full bg-red-500"></div>
              )
            }
          </motion.div>
        ))}
      </div>
    </div>
  );
}
