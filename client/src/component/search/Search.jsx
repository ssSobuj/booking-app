import { DateRange } from "react-date-range";
import { IoBedOutline, IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../button/Button";
import "./search.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";

export default function Search() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleDateChange = (item) => {
    setDate([item.selection]);
  };

  const formatDate = (date) => {
    return date ? format(date, "dd/MM/yyyy") : "Select Date";
  };

  const handleOption = (name, operation) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]:
          operation === "i" ? prevOptions[name] + 1 : prevOptions[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="search-container">
        <div className="search-section">
          <div className="serch">
            <IoBedOutline className="icon" />
            <input
              type="search"
              name="search"
              placeholder="Where are you going"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="date-range">
            <IoCalendarOutline className="icon" />
            <span onClick={() => setOpenDate(!openDate)}>
              {`${formatDate(date[0].startDate)} to ${formatDate(
                date[0].endDate
              )}`}
            </span>
            {openDate && (
              <span className="data">
                {" "}
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              </span>
            )}
          </div>
          <div className="Search-option">
            <span onClick={() => setOpenOption(!openOption)}>
              {`adult:${options.adult} children:${options.children} room:${options.room}`}
            </span>
            <IoIosArrowDown
              onClick={() => setOpenOption(!openOption)}
              className="icon"
            />
            {openOption && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      onClick={() => handleOption("adult", "i")}
                      className="optionCounterButton"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children < 1}
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button onClick={() => handleOption("children", "i")}>
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button onClick={() => handleOption("room", "i")}>+</button>
                  </div>
                </div>
                <button className="done">done</button>
              </div>
            )}
          </div>
          <Button
            style={{
              color: "var(--primary-color)",
              backgroundColor: "var(--secondary-color)",
              padding: " 15px 50px",
              borderRadius: "3px",
              border: "3px solid var(--orange-color)",
              cursor: "pointer",
              transition: "all 0.5s ease-in-out",
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
