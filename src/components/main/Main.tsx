import aboutUs from './../../assets/imgs/about-us.jpg'
import Category from './Category'
import Comments from './Comments'
import News from './News'
import Product from './Product'
import { Element } from 'react-scroll';
function Main() {
  const books = [
    { img: 'https://m.media-amazon.com/images/I/71OZY035QKL.jpg', name: 'The little prince', desc: "The story follows a young prince who visits various planets, including Earth, and addresses themes of loneliness, friendship, love, and loss." },
    { img: 'https://cdn.kobo.com/book-images/1a735d96-6075-4bca-87b7-15fb97ee50c7/353/569/90/False/pride-and-prejudice-216.jpg', name: 'Pride and prejudice', desc: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book." },
    { img: 'https://m.media-amazon.com/images/M/MV5BZWYwMGE1YTItYjdhZS00YWRjLTg4YjMtZGFmMTY2M2RmZjAyXkEyXkFqcGc@._V1_.jpg', name: 'Jane Eyre', desc: "Jane Eyre, the protagonist of Charlotte Brontë's novel, is described as plain and small, yet possesses a strong sense of self and independence. " },
    { img: 'https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp?t=1709095286', name: 'Harry Potter', desc: "Harry Potter Series ; Book 1.5. Christmas at Hogwarts ; Book 2. Harry Potter and the Chamber of Secrets ; Book 3. Harry Potter and the Prisoner of Azkaban " },
    { img: 'https://m.media-amazon.com/images/I/91Lbhwt5RzL._AC_UF1000,1000_QL80_DpWeblab_.jpg', name: 'Animal farm', desc: "The hens perched themselves on the window-sills, the pigeons fluttered up to the rafters, the sheep and cows lay down behind the pigs and began to chew the." },
    { img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781607102113/the-adventures-of-sherlock-holmes-and-other-stories-9781607102113_hr.jpg', name: 'Sherlock Holmes', desc: "Sherlock Holmes Series Complete Collection 10 Books Set by Arthur Conan Doyle (Return,Memoirs, Adventures, Valley of Fear, His Last Bow, Case-Book,Hound." },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaeVNzU-AoPhjtWxxhIEDSjuV9eMjvLi6cQ&s', name: 'Lord of rings', desc: "Sherlock Holmes Series Complete Collection 10 Books Set by Arthur Conan Doyle (Return,Memoirs, Adventures, Valley of Fear, His Last Bow, Case-Book,Hound." },
    { img: 'https://images.penguinrandomhouse.com/cover/9780525565109', name: 'The mysterious affair at styles', desc: "Sherlock Holmes Series Complete Collection 10 Books Set by Arthur Conan Doyle (Return,Memoirs, Adventures, Valley of Fear, His Last Bow, Case-Book,Hound." },

  ]
  const categories = [
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSK8ZI9yAQVOTOYvKilVFyQDJyNzlAyX8Pbw&s', name: 'Historical fiction' },
    { img: 'https://i.pinimg.com/236x/61/9d/fc/619dfc9d4c44f00f2bb89ec95d32c4bb.jpg', name: 'Fantasty' },
    { img: 'https://media.gq.com/photos/59efa5f866e2d56abcd7a055/4:3/w_1728,h_1296,c_limit/state-of-horror-gq.jpg', name: 'Horror' },
    { img: 'https://images.ctfassets.net/qpn1gztbusu2/7gDsetIrGqA3BwwCPi14l7/f80b99de31687930d519bd48c773dfd1/best-mystery-audiobooks-social.jpg', name: 'Mystery' },
  ]
  const news = [
    { img: 'https://images.pexels.com/photos/16014090/pexels-photo-16014090/free-photo-of-coffee-and-books.jpeg', tittle: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illum. Distinctio modi cumque iusto voluptates adipisci odio blanditiis fugiat eos!' },
    { img: 'https://images.pexels.com/photos/16014090/pexels-photo-16014090/free-photo-of-coffee-and-books.jpeg', tittle: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illum. Distinctio modi cumque iusto voluptates adipisci odio blanditiis fugiat eos!' },
    { img: 'https://images.pexels.com/photos/16014090/pexels-photo-16014090/free-photo-of-coffee-and-books.jpeg', tittle: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illum. Distinctio modi cumque iusto voluptates adipisci odio blanditiis fugiat eos!' },
  ]
  const comments = [
    { name: 'Steven Smith', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem temporibus nobis? Ut, molestiae! Qui quidem possimus consequatur cum, cumque in mollitia, repellat et labore at molestias. Exercitationem dolor aut ad laudantium perferendis totam quibusdam in beatae maiores, fugit obcaecati hic? Nisi ea dolorem commodi odit a et eius quam suscipit vero repellat beatae perferendis, ex, culpa repellendus? Officia eos autem provident praesentium natus amet vel laborum eaque perferendis reiciendis.', profile_img: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', star_number: '4', specialty: 'founder' },
    { name: 'Steven Smith', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem temporibus nobis? Ut, molestiae! Qui quidem possimus consequatur cum, cumque in mollitia, repellat et labore at molestias. Exercitationem dolor aut ad laudantium perferendis totam quibusdam in beatae maiores, fugit obcaecati hic? Nisi ea dolorem commodi odit a et eius quam suscipit vero repellat beatae perferendis, ex, culpa repellendus? Officia eos autem provident praesentium natus amet vel laborum eaque perferendis reiciendis.', profile_img: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', star_number: '4', specialty: 'founder' },
    { name: 'Steven Smith', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem temporibus nobis? Ut, molestiae! Qui quidem possimus consequatur cum, cumque in mollitia, repellat et labore at molestias. Exercitationem dolor aut ad laudantium perferendis totam quibusdam in beatae maiores, fugit obcaecati hic? Nisi ea dolorem commodi odit a et eius quam suscipit vero repellat beatae perferendis, ex, culpa repellendus? Officia eos autem provident praesentium natus amet vel laborum eaque perferendis reiciendis.', profile_img: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', star_number: '4', specialty: 'founder' }
  ]
  return (
    <main>
      <div className="container">
        <Element name='about-us'>
          <section id='about-us'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, impedit numquam? Cumque minus quas nesciunt omnis at accusantium mollitia blanditiis obcaecati dolorum. Tenetur itaque voluptas minima quos. Consequuntur, ex omnis. Fugit facilis libero rem nostrum tenetur vero modi saepe, deleniti architecto natus, accusantium voluptatem voluptate, eveniet odit ut harum repellendus?
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda consequuntur dolor culpa quae quis provident voluptatum odio amet, officia ipsa nisi, aperiam voluptates at, doloremque error praesentium laborum inventore doloribus. Debitis aperiam, nemo quaerat quisquam architecto voluptatem deleniti minus blanditiis.</p>
            </div>
            <div className='about-us-img'>
              <img src={aboutUs} alt="library" />
            </div>
          </section>
        </Element>
        <Element name='book'>
          <section className="all-sections">
            <h2>Products</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="boxes" >
              {
                books && books.map((item) => <Product item={item} />)
              }
            </div>
          </section>
        </Element>
        <Element name='category'>
          <section className="all-sections">
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div className="boxes">
              {
                categories && categories.map((item) => <Category item={item} />)
              }
            </div>
          </section>
        </Element>
        <section className="all-sections news">
          <h2>News & Blogs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="boxes">
            {
              news && news.map((item) => <News item={item} />)
            }
          </div>
        </section>
        <section className="all-sections">
          <h2>What's people say</h2>
          <div className="boxes comments">
            {
              comments && comments.map((item) => <Comments item={item} />)
            }
          </div>
        </section>
      </div>
      <div className='subscribtion'>
        <div className="container">
          <div className="texts">
            <h5>subscribe to our news letter</h5>
            <span>Enter your email address to recieve regular updates.</span>
          </div>
          <form>
            <input type="text" placeholder='Email Address' />
            <button>Subscribe</button>
          </form>

        </div>
      </div>
    </main>
  )
}

export default Main