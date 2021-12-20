import './App.css';
// import { useWeb3React } from "@web3-react/core";
// import { injected } from "./wallet/Connector";
// import web3 from "web3";


function App() {
  // Main Banner Image
  // const { active, account, library, activate, deactivate } = useWeb3React();
  const mainBgImage = "https://i.pinimg.com/originals/a7/03/8f/a7038f4f71389916700dd7479f89b888.gif";

  // async function connect() {
  //   try {
  //     await activate(injected);
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  // Apes Image Data
  const items = [
    { img: 'https://i.pinimg.com/originals/c6/8c/04/c68c04352f6e3d7ede60650d31b428c3.jpg' },
    { img: 'https://image.freepik.com/fotos-kostenlos/maki-sushi-isoliert-auf-weiss_2829-5653.jpg' },
    { img: 'https://preview.redd.it/u6m2ld7jlqiy.jpg?auto=webp&s=f146be5d63abe36e9cb8621fcda959fa54e938a9' },
    { img: 'https://www.tokyoryokan.in/wp-content/uploads/2017/12/ebi-tempura.jpg' },
  ]
  return (
    <div className="App">

      {/* MAIN BANNER */}
      <div className="main-card-wrapper" style={{ backgroundImage: `url(${mainBgImage})` }}>
        <div className="main-card__inner-wrapper">
          <h1 className="header-txt">Asia Dishes Qs'</h1>
          <button className="main-mint-btn">🍙 meet us!</button>
        </div>
      </div>

      {/* ITEM LIST */}
      <div className="cards-wrapper">
        {items.map((item, index) => (
          <div className="cards-item" key={index}>
            <div className="img-wrapper">
              <img src={item.img} alt={`item_${index}`} />
            </div>
            <div className="btn-wrapper">
              <button
              type="button"
              className="sm-mint-button"
              // onClick={connect}
              >
        	q recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
