export enum CardType {
    normal = 'normal',
    wide = 'wide',
    normalFluid = 'normal--fluid',
}

export enum AppRoutes {
    Home = '/',
    Website = '/Website',
    FluidType = '/FluidType',
    FluidTypeStaticCards = '/FluidType/Static',
    FluidTypeFluidCards = '/FluidType/Fluid',
    StaticGridFluidCards = '/FluidType/StaticGrid',
    CSSGrid = '/CSSGrid',
    CSSGridExample1 = '/CSSGrid/Example1',
    CustomVariables = '/CustomVariables',
    UserGroup = '/UserGroup',
    TableLayout = '/UserGroup/TableLayout',
    FlashLayout = '/UserGroup/FlashLayout',
    FloatLayout = '/UserGroup/FloatLayout',
    FloatLayoutResponsive = '/UserGroup/FloatLayout/Responsive',
    FlexBox = '/UserGroup/Flexbox',
    CSSGrid_UG1 = '/UserGroup/CSSGrid/1',
    CSSGrid_UG2 = '/UserGroup/CSSGrid/2',
    CSSGrid_UG3 = '/UserGroup/CSSGrid/3',
    CSSGrid_UG4 = '/UserGroup/CSSGrid/4',
}

export class Step {
    public cssClass:string;
    public label:string;
    constructor(cssClass:string, label:string) {
        this.cssClass = cssClass;
        this.label = label;
    }
}
export class FluidTypeSteps {
    public static One:Step = new Step('static-type','Static Type');
    public static Two:Step = new Step('mod-scale-fluid','Fluid Type');
}
export class CSSGridSteps {
    public static One:Step = new Step('grid-1','Resize Cols');
    public static Two:Step = new Step('grid-2','Position Content');
    public static Three:Step = new Step('grid-3','Resize Rows');
    public static Four:Step = new Step('grid-4','More Content');
}
export class CSSGridExample1Steps {
    public static Bootstrap3:Step = new Step('bootstrap-3','Bootstrap 3');
    public static Grid:Step = new Step('grid','Grid');
}

export class ContentTitle {
    private text:string;
    private subtitles:ContentTitle[];
    constructor(title:string = 'Generic', subtitles:ContentTitle[] = []) {
        this.text = title;
        this.subtitles = subtitles;
    }
    public toString = () : string => this.text;    
}
export class Titles {
    public static G:ContentTitle = new ContentTitle('Generic');
    public static W:ContentTitle = new ContentTitle('Website Goals');
    public static UG:ContentTitle = new ContentTitle('User Goals');
    public static C:ContentTitle = new ContentTitle('Content',[new ContentTitle('Schema'),new ContentTitle('Naming Conventions')]);
    public static ADA:ContentTitle = new ContentTitle('ADA');
    public static OM:ContentTitle = new ContentTitle('Online Marketing',[new ContentTitle('SEO'),new ContentTitle('Personalization'),new ContentTitle('A/B Testing'),new ContentTitle('Remarketing'),new ContentTitle('Contact Management'),new ContentTitle('Email Marketing')]);
    public static DM:ContentTitle = new ContentTitle('Data Management',[new ContentTitle('Privacy'),new ContentTitle('GDPR')]);
    public static S:ContentTitle = new ContentTitle('Security');
    public static BRD:ContentTitle = new ContentTitle('Build / Release / Deployment');
    public static P:ContentTitle = 
        new ContentTitle('Performance',[
            new ContentTitle('Perception'),
            new ContentTitle('Caching'),
            new ContentTitle('JavaScript',[
                new ContentTitle('Benchmarking'),
                new ContentTitle('Polyfill vs Graceful Degradation'),
                new ContentTitle('Budget', [
                    new ContentTitle('File Size'),
                    new ContentTitle('Download Speed'),
                    new ContentTitle('Compile Speed'),
                    new ContentTitle('Execution Speed'),
                ]),
                new ContentTitle('Evaluation Rubric'),
            ]),
            new ContentTitle('Asset Optimization', [
                new ContentTitle('Minifying'),
                new ContentTitle('Compression'),
                new ContentTitle('Miscelaneous', [
                    new ContentTitle('Http2'),
                    new ContentTitle('Above the fold CSS'),
                    new ContentTitle('Lazy loading'),
                    new ContentTitle('Picture &amp; Source'),
                    new ContentTitle('Sprite Sheets'),
                    new ContentTitle('Third Party Resources'),
                ]),
            ]),
        ]);
}
