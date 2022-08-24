import React from "react";
import Tik from "@components/assets/svg/Tik";
import Accordion from "@components/commen/Accordion/Accordion ";
import { Text } from "@context/LanguageContext";

function Info() {
  return (
    <div>
      <div className=" grid grid-cols-[200px_minmax(900px,_1fr)] gap-x-[41px] gap-y-[20px] items-center dark:text-white dark:opacity-80 mb-[40px]">
        <p className=" text-[20px] font-medium leading-[23px]">
          <Text tid="AccountName" />
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">
          hamed-izadi1325{" "}
        </p>
        <p className=" text-[20px] font-medium leading-[23px]">
          Contact Email:
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">
          hamizadi@gmail.com
        </p>
        <p className=" text-[20px] font-medium leading-[23px]">
          athenticate Status:
        </p>
        <p className=" text-[18px] font-normal leading-[21px]">step 3</p>
        <p className=" text-[20px] font-medium leading-[23px]">
          Security Status:
        </p>
        <p className=" text-[18px] font-normal leading-[21px] flex items-center">
          <span className="text-[#35D659] mr-[3px]">
            <Tik />
          </span>{" "}
          Protected by Google Athenticator since 2021-11-20
        </p>
      </div>
      {Acco.map((item, id) => (
        <Accordion label={item.title} id={id} key={id}>
          {item.text}
        </Accordion>
      ))}
    </div>
  );
}

export default Info;

const Acco = [
  {
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی   گذشته حال و آینده، ایجاد کرد، در این صورت می  ایجاد کرد؟ ",
    text: "   پاسخ: لورم ایپسوم متن ساختگی با تولید سادگی گذشته حال و آینده،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود درارائه راهکارها است. توان امید داشت که تمام و دشواری موجود در ارائه راهکارها است.توان امید داشت که تمام و",
  },
  // {
  //   title:
  //     "لورم ایپسوم متن ساختگی با تولید سادگی   گذشته حال و آینده، ایجاد کرد، در این صورت می  ایجاد کرد؟ ",
  //   text: "   پاسخ: لورم ایپسوم متن ساختگی با تولید سادگی گذشته حال و آینده،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود درارائه راهکارها است. توان امید داشت که تمام و دشواری موجود در ارائه راهکارها است.توان امید داشت که تمام و",
  // },
  // {
  //   title:
  //     "لورم ایپسوم متن ساختگی با تولید سادگی   گذشته حال و آینده، ایجاد کرد، در این صورت می  ایجاد کرد؟ ",
  //   text: "   پاسخ: لورم ایپسوم متن ساختگی با تولید سادگی گذشته حال و آینده،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود درارائه راهکارها است. توان امید داشت که تمام و دشواری موجود در ارائه راهکارها است.توان امید داشت که تمام و",
  // },
  // {
  //   title:
  //     "لورم ایپسوم متن ساختگی با تولید سادگی   گذشته حال و آینده، ایجاد کرد، در این صورت می  ایجاد کرد؟ ",
  //   text: "   پاسخ: لورم ایپسوم متن ساختگی با تولید سادگی گذشته حال و آینده،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود درارائه راهکارها است. توان امید داشت که تمام و دشواری موجود در ارائه راهکارها است.توان امید داشت که تمام و",
  // },
  // {
  //   title:
  //     "لورم ایپسوم متن ساختگی با تولید سادگی   گذشته حال و آینده، ایجاد کرد، در این صورت می  ایجاد کرد؟ ",
  //   text: "   پاسخ: لورم ایپسوم متن ساختگی با تولید سادگی گذشته حال و آینده،ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود درارائه راهکارها است. توان امید داشت که تمام و دشواری موجود در ارائه راهکارها است.توان امید داشت که تمام و",
  // },
];
