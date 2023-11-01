class AppRoutes {
  /**
   * The AppRoutes class defines the `getInstance` method that lets clients access
   * the unique AppRoutes instance.
   */
  private static instance: AppRoutes;
  /**
   * The AppRoutes's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }
  /**
   * The static method that controls the access to the singleton instance.
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AppRoutes {
    if (!this.instance) {
      return (AppRoutes.instance = new AppRoutes());
    }
    return this.instance;
  }

  // ./LandingPage Path
  getLandingPagePath(): string {
    return "/";
  }

  getLandingPageUrl(): string {
    return this.getLandingPagePath();
  }
  // about us
  getAboutUsPagePath(): string {
    // return "/about-us";
    return "/";

  }

  getAboutUsPageUrl(): string {
    return this.getAboutUsPagePath();
  }

  // garageTeam
  getGarageTeamPagePath(): string {
    // return "/garage-team";
    return "/";

  }

  getGarageTeamPageUrl(): string {
    return this.getGarageTeamPagePath();
  }

  //garagePartner
  getGaragePartnerPagePath(): string {
    // return "/garage-partner";
    return "/";

  }

  getGaragePartnerPageUrl(): string {
    return this.getGaragePartnerPagePath();
  }

  //news letter
  getNewsLetterPagePath(): string {
    // return "/garage-news-letter";
    return "/";

  }

  getNewsLetterPageUrl(): string {
    return this.getNewsLetterPagePath();
  }

  //media
  getMediaPagePath(): string {
    // return "/garage-media";
    return "/";

  }

  getMediaPageUrl(): string {
    return this.getMediaPagePath();
  }

  //plus
  getPlusPagePath(): string {

    // return "/garage-plus";
    return "/";
  }

  getPlusPageUrl(): string {

    return this.getPlusPagePath();
  }

  //disrupt
  getDisruptPagePath(): string {
    // return "/garage-disrupt";
    return "/";

  }

  getDisruptPageUrl(): string {
    return this.getPlusPagePath();
  }

  //incubator
  getIncubatorPagePath(): string {
    // return "/garage-incubator";
    return "/";
  }

  getIncubatorPageUrl(): string {

    return this.getIncubatorPagePath();
  }

  //misaLicense
  getMisaPagePath(): string {
    return "/garage-misa";
  }

  getMisaPageUrl(): string {
    return this.getMisaPagePath();
  }

  //CommonQuestions
  getCommonQuestionsPagePath(): string {
    return "/faq";
  }

  getCommonQuestionsyPageUrl(): string {
    return this.getCommonQuestionsPagePath();
  }

  getIncubatorFormPagePath(): string {
    return "/garage-incubator-form";
  }

  getIncubatorFormPageUrl(): string {
    return this.getIncubatorFormPagePath();
  }

  //contact us
  getContactUsPagePath(): string {
    return "/contact-us";
  }

  getContactUsPageUrl(): string {
    return this.getContactUsPagePath();
  }



  //Garage Close Plus Register
  getGarageClosePlusPagePath(): string {
    return "/garage-close-plus-register";
  }

  getGarageClosePlusPageUrl(): string {
    return this.getGarageClosePlusPagePath();
  }

  //Garage Close Incubator Register
  getGarageCloseIncubatorPagePath(): string {
    return "/garage-close-incubator-register";
  }

  getGarageCloseIncubatorPageUrl(): string {
    return this.getGarageCloseIncubatorPagePath();
  }

  //Garage Close Disrupt Register
  getGarageCloseDisruptPagePath(): string {
    return "/garage-close-disrupt-register";
  }

  getGarageCloseDisruptPageUrl(): string {
    return this.getGarageCloseDisruptPagePath();
  }

  //plus form page
  getPlusFormPagePath(): string {
    return "/apply";
  }

  getPlusFormPageUrl(): string {
    return this.getPlusFormPagePath();
  }

  // detailed news letter page
  getDetailedNewsLetterPagePath(): string {
    return "/minified:CS";
  }

  getDetailedNewsLetterPageUrl(): string {
    return this.getDetailedNewsLetterPagePath();
  }


  // access page

  getAccessPagePath(): string {
    return "/access";
  }

  getAccessPageUrl(): string {
    return this.getAccessPagePath();
  }

  getAccessApplyPagePath(): string {
    return "/access-apply";

  }

  getAccessApplyPageUrl(): string {
    return this.getAccessApplyPagePath();
  }

  //plus form page
  getDisruptHiddenPagePath(): string {
    return "/disrupt";
  }

  getDisruptHiddenPageUrl(): string {
    return this.getPlusFormPagePath();
  }

  getDashBoardPagePath(): string {
    return "/dashboard";
  }

  getDashBoardPageUrl(): string {
    return this.getDashBoardPagePath();
  }
}

export const appRoutesObj = AppRoutes.getInstance();
