import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { fetchFromAPI } from "../utils/fetch_from_API"

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  console.log(channelDetail);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet"&id="${id}`)
    .then((data) => {setchannelDetail(data?.items[0])});
  }, [id])

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail