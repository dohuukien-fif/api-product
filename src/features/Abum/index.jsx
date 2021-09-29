import React from "react";

import AbumList from "./component/AbumList/index";
function AlbumFeature(props) {
  const AbumLists = [
    {
      id: 1,
      title: "Nhạc thịnh hành",
      thumbnaiUrl:
        "https://cdn.tgdd.vn/Files/2016/11/15/914041/cach-tai-bai-hat-co-ban-quyen-tren-zing-mp3-qua-dien-thoai-1.jpg",
    },
    {
      id: 2,
      title: "Rap việt nghe là ghiền",
      thumbnaiUrl:
        "https://cdn.tgdd.vn/Files/2016/11/15/914041/cach-tai-bai-hat-co-ban-quyen-tren-zing-mp3-qua-dien-thoai-1.jpg",
    },
    {
      id: 3,
      title: "Trào lưu nhạc hot",
      thumbnaiUrl:
        "https://cdn.tgdd.vn/Files/2016/11/15/914041/cach-tai-bai-hat-co-ban-quyen-tren-zing-mp3-qua-dien-thoai-1.jpg",
    },
    {
      id: 4,
      title: "Trào lưu nhạc hot",
      thumbnaiUrl:
        "https://cdn.tgdd.vn/Files/2016/11/15/914041/cach-tai-bai-hat-co-ban-quyen-tren-zing-mp3-qua-dien-thoai-1.jpg",
    },
  ];
  return (
    <div>
      <h1>Abum Music</h1>
      <AbumList abumLists={AbumLists} />
    </div>
  );
}

export default AlbumFeature;
