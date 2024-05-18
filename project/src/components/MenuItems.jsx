import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const handleClickSubMenu = (path) => {
    if (!path) {
      console.error("Aucun chemin défini pour ce sous-menu");
      return;
    }

    // Implémentez les actions pour les sous-menus avec des chemins définis
    console.log("Cliqué sur :", path);
    if (path === "/Ajouter") {
      // Afficher l'interface pour ajouter un élément
    } else if (path === "/AddUser") {
      // Afficher l'interface pour modifier un élément
    } else if (path === "/motdepasse") {
      // Actions pour supprimer un élément
    }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenus ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
             {items.title} {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown depthLevel={depthLevel} submenus={items.submenus} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.path} onClick={() => handleClickSubMenu(items.path)}>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
