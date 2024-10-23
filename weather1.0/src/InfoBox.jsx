/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// eslint-disable-next-line react/prop-types
export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         
         <p>Temperature = {info.temp}</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min temp = {info.tempMin}&deg;C</p>
         <p>Max temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <li>{info.weather}</li> and feels like = {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}