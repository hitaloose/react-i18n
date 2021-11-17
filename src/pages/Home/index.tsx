import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { localeStrings } from "./localeStrings";

export const Home = () => {
  const { t, changeLanguage, currentLanguage } = useLanguage(localeStrings);
  const navigate = useNavigate();

  return (
    <div>
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value as any)}
      >
        <option value="pt">Pt</option>
        <option value="en">En</option>
      </select>

      <h1>{t("WELCOME")}</h1>

      <p>{t("P")}</p>

      <button onClick={() => navigate("/about")}>{t("GO_TO_ABOUT")}</button>
    </div>
  );
};
