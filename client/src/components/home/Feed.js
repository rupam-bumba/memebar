import React, { useState, useEffect,useContext } from "react";
import Cards from "./Cards";
import axios from "axios";
import { json } from "body-parser";

import {GrobalContex} from "../../context/GlobalContex"


export default function Feed() {
  const [FetchResult, setFetchResult] = useState();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)
  useEffect(() => {
    console.log("| 55 Debug |  use Effect reload");

    axios({
      // `url` is the server URL that will be used for the request
      url: "/api/post/fetch",

      // `method` is the request method to be used when making the request
      method: "post", // default

      // `baseURL` will be prepended to `url` unless `url` is absolute.
      baseURL: GlobalContexValue.url,

      // `headers` are custom headers to be sent
      headers: { "X-Requested-With": "XMLHttpRequest" },

      // `data` is the data to be sent as the request body
      data: {},
    })
      .then((result) => {
        console.log("| 29 Debug |" + JSON.stringify(result.data.result));

   

        setFetchResult(result.data.result);
        console.log("| 40 Debug |" + JSON.stringify(FetchResult));
      })
      .catch((error) => {
        console.log("| 47 Debug error |" + JSON.stringify(error));
      });
  }, []);

  return (
    <div>
      {/* {JSON.stringify(FetchResult)} */}
      {/* {typeof FetchResult} */}

      {FetchResult &&
        FetchResult.map((item) => {
          return (
            <>
              <Cards  {...item} />
            </>
          );
        })}
    </div>
  );
}

// {"file":["1591199539871-postImageFileName.png"],
// "react":[],
// "comment":[],
// "reference":[],
// "_id":"5ed7c733b019802253410696",
// "_user_id":"undefined",
// "text":"asasasasas",
// "date":"2020-06-03T15:52:19.901Z",
// "__v":0}
