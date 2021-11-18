import { useLanguage } from "../../hooks/useLanguage";
import { localeStrings } from "./localeStrings";
import { commonLocaleStrings } from "../../utils/commonLocaleStrings";

export const About = () => {
  const { t } = useLanguage(localeStrings);
  const { t: commonT } = useLanguage(commonLocaleStrings);

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <p>{t("CONTACT")}</p>

      <p>{commonT("ERROR")}</p>
    </div>
  );
};
