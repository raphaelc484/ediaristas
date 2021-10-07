import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profisionais na sua localidade"
        }
      />
      <UserInformation
        name={"Raphael Clemente Miranda"}
        picture="https://github.com/raphaelc484.png"
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
