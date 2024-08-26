import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [openProfile, setOpenProfile] = useState(false);
	const { t } = useTranslation();

	const logout = () => {
		localStorage.clear();
	};

	const handleMenuOpenProfile = () => {
		setOpenProfile((prev) => !prev);
	};

	return (
		<nav className="navbar">
			<label htmlFor="check" className="menu-btn">
				<i className="fas fa-bars"></i>
			</label>
			<input type="checkbox" id="check" className="menu-checkbox" />

			<a href="/about" className="logo" style={{ fontSize: "1.5rem" }}>
				NewsRead
			</a>
			<ul className="navlinks" >
				<li>
					<a href="/" style={{ fontSize: "1.5rem" }}>Home</a>
				</li>
				<li>
					<a href="/about" style={{ fontSize: "1.5rem" }}	>About</a>
				</li>

				<li className="nav-item dropdown" onMouseEnter={handleMenuOpenProfile}>
					<a>
						<button className="btn-profile">
							{localStorage.getItem("email") ? (
								<img
									className="profile-pic"
									src={localStorage.getItem("profilePic")}
									alt="Profile"
								/>
							) : (
								<div style={{ fontSize: "1.5rem" }}>
									Profile <i className="fa fa-circle-user"></i>
								</div>
							)}
						</button>
					</a>
					{openProfile && (
						<div className="dropdown-profile">
							<div className="dropdown-divider"></div>
							{localStorage.getItem("email") ? (
								<a href="/" onClick={logout}>
									{t("logout")}
								</a>
							) : (
								<a href="/login">{t("login")}</a>
							)}
						</div>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
