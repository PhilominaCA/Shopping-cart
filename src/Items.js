import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

export function Items({ photo, itemName, rating, discountRate, rate,addButton,deleteOp }) {
  const useStyles = makeStyles({
    root: {
      background:"skyblue",
      maxWidth: 305,
      padding: 4,
    },
    media: {
      height: 240,
      width: 300,
    },
  });
  const classes = useStyles();
  return (<div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo}
          title={itemName} />
      </CardActionArea>
      <div className="item-details">
        <h4 className="item-name">{itemName}
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
        </h4>
        <p>
          <span className="discountRate">${discountRate} </span>
          <span className="rate">${rate}</span>
        </p>
{addButton} {deleteOp}
      </div>
    </Card>
  </div>);
}