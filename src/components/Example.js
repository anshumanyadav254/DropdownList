import React from "react";
import { Dropdown } from "semantic-ui-react";

const options1 = [
  {
    key: "1",
    text: "Anshuman",
    value: "1",
    image: {
      avatar: true,
      src: "https://he-s3.s3.amazonaws.com/media/avatars/anshuman277/resized/160/0d2b744img_0223.jpg"
    }
  },
  {
    key: "2",
    text: "Prithvi sha",
    value: "2",
    image: {
      avatar: true,
      src: "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/26/w1200X800/Prithvi_Shaw_PTI.jpg"
    }
  },
  {
    key: "3",
    text: "Virat Kohali",
    value: "3",
    image: {
      avatar: true,
      src: "https://t1.gstatic.com/images?q=tbn:ANd9GcS5hCGSJyskVOR1qNQwuRzLsq99Qz60CqHIGsAZQ7Z-wooooD934jJM6979cpnD"
    }
  },
  {
    key: "4",
    text: "Rohit Sharma ",
    value: "4",
    image: {
      avatar: true,
      src: "https://timesofindia.indiatimes.com/photo/69257289.cms"
    }
  },
  {
    key: "5",
    text: "Sikhar Dhawan",
    value: "5",
    image: {
      avatar: true,
      src: "https://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024223.jpeg"
    }
  },
  {
    key: "6",
    text: "Rishabh Pant",
    value: "6",
    image: {
      avatar: true,
      src: "https://pbs.twimg.com/profile_images/1255017319635410944/lFsXKEs__400x400.jpg"
    }
  },
  {
    key: "7",
    text: "Pujara",
    value: "7",
    image: {
      avatar: true,
      src: "https://i.ndtvimg.com/i/2017-05/cheteshwar-pujara-bcci_806x605_81493654976.jpg"
    }
  },
  {
    key: "8",
    text: "MS Dhoni",
    value: "8",
    image: {
      avatar: true,
      src: "https://economictimes.indiatimes.com/thumb/msid-70304475,width-1200,height-900,resizemode-4,imgsize-694926/mahendra-singh-dhoni-pulls-out-of-west-indies-tour-takes-two-month-break-amid-retirement-speculation.jpg?from=mdr"
    }
  },
  {
    key: "9",
    text: "Bumrah",
    value: "9",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "10",
    text: "Chahal",
    value: "10",
    image: {
      avatar: true,
      src: "https://www.crictracker.com/wp-content/uploads/2020/04/Yuzvendra-Chahal-1.jpg"
    }
  },
  {
    key: "11",
    text: "Kuldeep",
    value: "11",
    image: {
      avatar: true,
      src: "https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/full/1553260314.jpg"
    }
  },
  {
    key: "12",
    text: "Siraj",
    value: "12",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "13",
    text: "Umesh Yadav",
    value: "13",
    image: {
      avatar: true,
      src: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c153874/umesh-yadav.jpg"
    }
  },
  {
    key: "14",
    text: "Mayank Yadav",
    value: "14",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "15",
    text: "Jadeja",
    value: "15",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  }
];

const DropDown = () => (
  <Dropdown
    placeholder=" Click Here To Select Team"
    fluid
    multiple
    selection
    search
    icon
    
    options={options1}
  />
);

export default DropDown;
