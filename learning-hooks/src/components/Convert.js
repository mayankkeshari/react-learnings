import React, { useState, useEffect } from "react";
import axios from "axios";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Convert = ({ lang, text }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const doPost = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: lang,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    doPost();
  }, [lang, text]);

  return (
      <div>
          <h1 className="ui header">
              {translatedText}
          </h1>
      </div>
  );
};

export default Convert;
