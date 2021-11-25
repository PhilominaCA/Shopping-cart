import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


export function Home() {
  const slideImages = [
    {
      url: 'https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg',
      name: 'Grocery',
    },
    {
      url: 'https://media.gettyimages.com/photos/overhead-view-of-electronic-devices-on-a-desk-picture-id469467260',
      name: 'Electronics',
    },
    {
      url: 'https://media.istockphoto.com/photos/assortment-of-fine-chocolate-candies-white-dark-and-milk-chocolate-picture-id1148258027?k=20&m=1148258027&s=612x612&w=0&h=QjpETfJNaqC4OkhZj3GuNl5irjqXwnY0_RDVDvKBYcs=',
      name: 'Sweets',
    },
    {
      url: 'https://img.freepik.com/free-photo/close-up-view-various-stylish-clothes-hanging-hangers-boutique-clothes_162998-251.jpg?size=626&ext=jpg',
      name: 'Clothes',
    },
    {
      url: 'https://cdn.igp.com/f_auto,q_auto/cards/birthday-gifts-for-women.jpg',
      name: 'Gifts',
    }
  ];
  return (
    <div className="slide-container">
      <br />
      <h2 className="empty-cart">Everything you need!!</h2>
      <hr />
      <br /> <br />
      <ImageList cols={5}>
        {slideImages.map((item) => (
          <ImageListItem>
            <img src={item.url} alt="shopping" />
          </ImageListItem>
        ))}
      </ImageList>
      <br /> <br />
      <hr />
      <h2 className="empty-cart"> Enjoy Shopping!!!</h2>
    </div>
  );
}
