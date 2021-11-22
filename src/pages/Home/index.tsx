import { useNavigate } from "react-router-dom";
import { useI18n } from "../../hooks/useI18n";
import { strings } from "./strings";

export const Home = () => {
  const { t, changeLanguage, currentLanguage } = useI18n(strings);
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
      <p>{t("NOT_FOUND", { model: "Image type" })}</p>
      <p>
        {t("NOT_FOUND", { model: { en: "Image type", pt: "Tipo de imagem" } })}
      </p>

      <button onClick={() => navigate("/about")}>{t("GO_TO_ABOUT")}</button>
    </div>
  );
};
