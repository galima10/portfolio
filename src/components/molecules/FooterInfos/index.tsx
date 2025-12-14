import AppButton from "@components/atoms/appElements/AppButton";
import AppSVG from "@components/atoms/svgIcons/AppSVG";
import GenericButton from "@components/atoms/appElements/GenericButton";

export default function FooterInfos() {
  return (
    <div className="footerInfos">
      <div aria-hidden="true">
        <AppSVG name="logo" className="logo" />
      </div>
      <AppButton label="Téléchargez mon CV" type="secondary" />
      <div>
        <p>Retrouvez-moi au delà des océans</p>
        <ul className="socialMediaIcons">
          <li className="githubIcon">
            <GenericButton to="https://github.com/galima10/">
              <AppSVG name="github" />
            </GenericButton>
          </li>
          <li className="linkedinIcon">
            <GenericButton to="https://www.linkedin.com/in/mai-magali/">
              <AppSVG name="linkedin" />
            </GenericButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
