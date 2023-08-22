import React from "react";
import "./food.scss";
import StatusBar from "@/components/StatusBar/StatusBar";
import { PageNavigation } from "@/components/common/PageNavigation/PageNavigation";

interface Food {
  category: string;
  name: string;
  rating: number;
  totalOrder: number;
  trending: string;
  percentage: string;
}

const listFoods: Food[] = [
  {
    category: "food",
    name: "Beef Steak with Fried Potato",
    rating: 4.9,
    totalOrder: 1456,
    trending: "26%",
    percentage: "50%",
  },
  {
    category: "food",
    name: "Pancake with Honey",
    rating: 4.9,
    totalOrder: 1456,
    trending: "26%",
    percentage: "50%",
  },
  {
    category: "food",
    name: "Japanese Beef Ramen",
    rating: 4.9,
    totalOrder: 1456,
    trending: "26%",
    percentage: "50%",
  },
  {
    category: "food",
    name: "Mixed Salad",
    rating: 4.9,
    totalOrder: 1456,
    trending: "26%",
    percentage: "50%",
  },
  {
    category: "food",
    name: "Beef Meatball with Vegetable",
    rating: 4.9,
    totalOrder: 1456,
    trending: "26%",
    percentage: "50%",
  },
];

const Food = () => {
  return (
    <div id="food">
      <div className="food-header">
        <div className="header-text">Food</div>
        <StatusBar />
      </div>
      <FoodTable listFoods={listFoods} />
    </div>
  );
};

function FoodTable({ listFoods }) {
  const rows = [];
  listFoods.map((food: Food) =>
    rows.push(
      <tr className="food-item" aria-rowspan={7}>
        <td className="food-image"></td>
        <td className="food-info">
          <div className="food-category">{food.category}</div>
          <div className="food-name">{food.name}</div>
        </td>

        <td>
          <div className="food-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                d="M13.0554 0.717387C13.3667 -0.178173 14.6333 -0.178173 14.9446 0.717387L17.5334 8.16501C17.6707 8.56008 18.0394 8.82795 18.4575 8.83647L26.3406 8.99711C27.2886 9.01643 27.6799 10.221 26.9244 10.7938L20.6413 15.5573C20.308 15.81 20.1671 16.2434 20.2883 16.6438L22.5715 24.1907C22.846 25.0982 21.8214 25.8426 21.0432 25.3011L14.5712 20.7975C14.2279 20.5586 13.7721 20.5586 13.4288 20.7975L6.95684 25.3011C6.1786 25.8426 5.15396 25.0982 5.42851 24.1907L7.71173 16.6438C7.83285 16.2434 7.69202 15.81 7.35873 15.5573L1.0756 10.7938C0.320066 10.221 0.711446 9.01643 1.65937 8.99711L9.54246 8.83647C9.96063 8.82795 10.3293 8.56008 10.4666 8.16501L13.0554 0.717387Z"
                fill="#FCC43E"
              />
            </svg>
            <div className="food-rating-text">{food.rating}</div>
          </div>
        </td>
        <td>
          <div className="food-order-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="53"
              viewBox="0 0 62 53"
              fill="none"
            >
              <path
                d="M8 31.7387C8 30.1102 6.20914 28.7901 4 28.7901C1.79086 28.7901 0 30.1102 0 31.7387V50.0515C0 51.6799 1.79086 53 4 53C6.20914 53 8 51.6799 8 50.0515V31.7387Z"
                fill="#4D44B5"
              />
              <path
                d="M26 21.2318C26 19.6242 24.2091 18.321 22 18.321C19.7909 18.321 18 19.6242 18 21.2318V50.0892C18 51.6968 19.7909 53 22 53C24.2091 53 26 51.6968 26 50.0892V21.2318Z"
                fill="#4D44B5"
              />
              <path
                d="M44 2.96576C44 1.32781 42.2091 0 40 0C37.7909 0 36 1.32782 36 2.96576V50.0342C36 51.6722 37.7909 53 40 53C42.2091 53 44 51.6722 44 50.0342V2.96576Z"
                fill="#4D44B5"
              />
              <path
                d="M62 26.5054C62 24.8762 60.2091 23.5556 58 23.5556C55.7909 23.5556 54 24.8762 54 26.5054V50.0502C54 51.6793 55.7909 53 58 53C60.2091 53 62 51.6793 62 50.0502V26.5054Z"
                fill="#4D44B5"
              />
            </svg>
            <div className="food-order-detail">
              <div className="total-order">{food.totalOrder}</div>
              <div className="total-order-text">Total Order</div>
            </div>
          </div>
        </td>

        <td>
          <div className="food-trending">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M39.9411 3.05888C39.9411 1.40202 38.598 0.0588757 36.9411 0.0588763L9.94113 0.0588746C8.28427 0.0588746 6.94113 1.40202 6.94113 3.05888C6.94113 4.71573 8.28427 6.05888 9.94113 6.05888H33.9411V30.0589C33.9411 31.7157 35.2843 33.0589 36.9411 33.0589C38.598 33.0589 39.9411 31.7157 39.9411 30.0589L39.9411 3.05888ZM5.12132 39.1213L39.0624 5.1802L34.8198 0.937555L0.87868 34.8787L5.12132 39.1213Z"
                fill="#4D44B5"
              />
            </svg>
            <div className="food-trending-detail">
              <div className="percentage">26%</div>
              <div className="status">Interest</div>
            </div>
          </div>
        </td>

        <td>
          <div className="food-percentage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM6 30C6 43.2548 16.7452 54 30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30Z"
                fill="#C1BBEB"
              />
              <path
                d="M30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.1607 45.5871 -2.21335e-07 37.9565 0 30C2.21335e-07 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.1607 22.0435 -9.48802e-08 30 0V6C23.6348 6 17.5303 8.52856 13.0294 13.0294C8.52856 17.5303 6 23.6348 6 30C6 36.3652 8.52856 42.4697 13.0294 46.9706C17.5303 51.4714 23.6348 54 30 54V60Z"
                fill="#4D44B5"
              />
            </svg>
            <div className="food-percentage-text">50%</div>
          </div>
        </td>
        <td className="action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0012 9.36C11.6543 9.36 11.3109 9.42832 10.9904 9.56105C10.67 9.69378 10.3788 9.88833 10.1335 10.1336C9.88829 10.3788 9.69374 10.67 9.56101 10.9905C9.42828 11.3109 9.35996 11.6544 9.35996 12.0012C9.35996 12.348 9.42828 12.6915 9.56101 13.0119C9.69374 13.3324 9.88829 13.6236 10.1335 13.8688C10.3788 14.1141 10.67 14.3086 10.9904 14.4414C11.3109 14.5741 11.6543 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8686 13.8684C14.3638 13.373 14.6419 12.7011 14.6418 12.0006C14.6416 11.3001 14.3632 10.6284 13.8677 10.1332C13.3723 9.63796 12.7004 9.35984 12 9.36H12.0012ZM3.60116 9.36C3.25431 9.36 2.91086 9.42832 2.59042 9.56105C2.26997 9.69378 1.97881 9.88833 1.73355 10.1336C1.48829 10.3788 1.29374 10.67 1.16101 10.9905C1.02828 11.3109 0.959961 11.6544 0.959961 12.0012C0.959961 12.348 1.02828 12.6915 1.16101 13.0119C1.29374 13.3324 1.48829 13.6236 1.73355 13.8688C1.97881 14.1141 2.26997 14.3086 2.59042 14.4414C2.91086 14.5741 3.25431 14.6424 3.60116 14.6424C4.30165 14.6422 4.97339 14.3638 5.4686 13.8684C5.9638 13.373 6.24192 12.7011 6.24176 12.0006C6.2416 11.3001 5.96318 10.6284 5.46775 10.1332C4.97231 9.63796 4.30045 9.35984 3.59996 9.36H3.60116ZM20.4012 9.36C20.0543 9.36 19.7109 9.42832 19.3904 9.56105C19.07 9.69378 18.7788 9.88833 18.5336 10.1336C18.2883 10.3788 18.0937 10.67 17.961 10.9905C17.8283 11.3109 17.76 11.6544 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.961 13.0119C18.0937 13.3324 18.2883 13.6236 18.5336 13.8688C18.7788 14.1141 19.07 14.3086 19.3904 14.4414C19.7109 14.5741 20.0543 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2686 13.8684C22.7638 13.373 23.0419 12.7011 23.0418 12.0006C23.0416 11.3001 22.7632 10.6284 22.2677 10.1332C21.7723 9.63796 21.1005 9.35984 20.4 9.36H20.4012Z"
              fill="#A098AE"
            />
          </svg>
        </td>
      </tr>
    )
  );

  const foodTableHeader = () => {
    return (
      <div className="food-table-header">
        <div className="food-header-text">Food Menu</div>
        <div className="food-category">
          <div className="food-category-item">
            <div className="food-category-text">All Menus</div>
          </div>
          <div className="food-category-item">
            <div className="food-category-text">Breakfast</div>
          </div>
          <div className="food-category-item">
            <div className="food-category-text">Lunch</div>
          </div>
          <div className="food-category-item">
            <div className="food-category-text">Snack</div>
          </div>
        </div>
      </div>
    );
  };
  let onClick = ()=>{}

  return (
    <div className="food-table">
      {foodTableHeader()}
      <table>
        <tbody>{rows}</tbody>
      </table>

      <PageNavigation
        length={5}
        selected={0}
        skip={0}
        limit={6}
        total={100}
        onPageClick={onClick}
      />
    </div>
  );
}

export default Food;
