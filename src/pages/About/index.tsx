import { useLanguage } from "../../hooks/useLanguage";
import { localeStrings } from "./localeStrings";

export const About = () => {
  const { t } = useLanguage(localeStrings);

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <p>{t("CONTACT")}</p>
    </div>
  );
};
