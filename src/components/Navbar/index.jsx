import { useRecoilState } from "recoil";
import { searchInputState } from "@/lib/recoil";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {useAllLocationList} from "@/pages/api/location";
import { useState } from "react";

export default function Navbar() {
  const [searchInputRecoil, setSearchInputRecoil] =
    useRecoilState(searchInputState);
  const [searchInputUseState, setSearchInputUseState] = useState(0);

  const router = useRouter();
  const handleChange = (event) => {
    setSearchInputUseState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInputRecoil(searchInputUseState);
    if (router.pathname !== "/location") {
      router.push("/location");
    }
  };

  const { loading, data } = useAllLocationList();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">
          <Image
            src="/rickmorty-navbar.svg"
            alt="RickMorty Logo"
            width={72}
            height={40}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/" style={router.pathname === "/" ? {color:'#5AAD80'} : {}}>
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" href="https://www.figma.com/file/PSDexg0ddQ30GBGgc5XxId/RickMortyMostrans?type=design&node-id=0%3A1&mode=design&t=1cTFDob5iBVStEhq-1">
                Figma
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <select
              className="custom-select"
              id="location"
              value={searchInputUseState}
              onChange={handleChange}
            >
              <option selected value={0} disabled>
                Choose Location
              </option>
              {!loading &&
                data.locations.results.map((location) => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
            </select>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
