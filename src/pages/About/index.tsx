import { useLanguage } from "../../hooks/useLanguage";
import { localeStrings } from "./localeStrings";

export const About = () => {
  const { t } = useLanguage(localeStrings);

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <p>{t("CONTACT")}</p>

      <p>{t("ERROR", { code: "500" })}</p>
      <p>{t("ERROR", { code: "400" })}</p>
    </div>
  );
};
