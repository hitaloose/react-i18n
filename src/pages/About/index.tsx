import { useI18n } from "../../hooks/useI18n";
import { strings } from "./strings";
import { commonStrings } from "../../utils/commonStrings";

export const About = () => {
  const { t } = useI18n(strings);
  const { t: commonT } = useI18n(commonStrings);

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <p>{t("CONTACT")}</p>

      <p>{commonT("ERROR")}</p>
    </div>
  );
};
