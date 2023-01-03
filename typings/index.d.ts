declare module "fluxpoint-js" {
  interface IResponseOptions {
    type: "IMG" | "API";
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    endpoint: string;
    data?: Object;
  }
  interface IResponse {
    success: boolean;
    code: number;
    message: string;
    id: string;
    file: string;
  }
  interface IErrorResponse {
    success: boolean;
    code: number;
    message: string;
  }
  interface ITestResponse {
    success: boolean;
    code: number;
    message: string;
    website: string;
    discord: string;
    docs: string;
    twitter: string;
    email: string;
    donate: string;
    revolt: string;
  }
  type TTestImage = "png" | "webp";
  interface IDadJokeResponse {
    success: boolean;
    code: number;
    message: string;
    content: string;
  }
  interface IMeResponse {
    success: boolean;
    code: number;
    message: string;
    id: string;
    created: string;
  }
  interface IColorResponse {
    success: boolean;
    code: number;
    message: string;
    hex: string;
    name: string;
    r: number;
    g: number;
    b: number;
  }
  interface IHTMLToMarkdownOptions {
    html: string;
  }
  interface IMarkdownToHTML {
    markdown: string;
  }
  interface IListResponse {
    success: boolean;
    code: number;
    message: string;
    list: string[];
  }
  interface IGenerateWelcomeOptions {
    username: string;
    avatar: string;
    background: string;
    members?: string;
    icon?: string;
    banner?: string;
    color_welcome?: string;
    color_username?: string;
    color_members?: string;
  }
  interface IMinecraftResponse {
    online: boolean;
    icon: string | null;
    motd: string | null;
    playersOnline: number;
    version: string | null;
    fullQuery: boolean;
    players: Array;
    success: boolean;
    code: number;
    message: string;
  }
  interface IGetPingOptions {
    host: string | number;
    port: string | number;
  }
  class FluxpointClient {
    public token: string;
    private request: Request;
    public test: Test;
    public misc: Misc;
    public color: Color;
    public convert: Convert;
    public list: List;
    public sfw: SFW;
    constructor(
      options = {
        token: null as unknown as string,
      }
    ) {
      this.token = options.token;
      this.request = new Request(this.token);
      this.test = new Test(this);
      this.misc = new Misc(this);
      this.color = new Color(this);
      this.convert = new Convert(this);
      this.list = new List(this);
      this.sfw = new SFW(this);
    }
  }
  class Request {
    private token: string;
    private api: string;
    constructor(token: string) {
      this.api = "https://gallery.fluxpoint.dev";
      this.token = token;
    }

    public req(options: IResponseOptions): Promise<IResponse | IErrorResponse>;
  }
  class SFW {
    private client: FluxpointClient;
    public images: SFWImages;
    public gifs: SFWGifs;
    constructor(client: FluxpointClient) {
      this.client = client;
      this.images = new SFWImages(client);
      this.gifs = new SFWGifs(client);
    }
  }
  class Test {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public test(): Promise<ITestResponse>;
    public testGallery(): Promise<IResponse>;
    public testImage(type: TTestImage): Promise<ImageData>;
    public testError(): Promise<IErrorResponse>;
  }
  class Misc {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public getDadJoke(): Promise<IDadJokeResponse | IErrorResponse>;
    public getMe(): Promise<IMeResponse | IErrorResponse>;
  }
  class Color {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public random(): Promise<IColorResponse | IErrorResponse>;
    public getHex(hex: string): Promise<IColorResponse | IErrorResponse>;
    public getRGB(rgb: string): Promise<IColorResponse | IErrorResponse>;
    public getName(name: string): Promise<IColorResponse | IErrorResponse>;
  }
  class Convert {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public htmlToMarkdown(
      options: IHTMLToMarkdownOptions
    ): Promise<any | IErrorResponse>;
    public markdownToHTML(
      options: IMarkdownToHTML
    ): Promise<any | IErrorResponse>;
  }
  class List {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public getTemplates(): Promise<IListResponse | IErrorResponse>;
    public getBanners(): Promise<IListResponse | IErrorResponse>;
    public getIcons(): Promise<IListResponse | IErrorResponse>;
  }
  class Images {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public generateTemplate(
      template: string
    ): Promise<ImageData | IErrorResponse>;
    public generate(): Promise<ImageData | IErrorResponse>;
    public generateWelcome(
      options: IGenerateWelcomeOptions
    ): Promise<ImageData | IErrorResponse>;
  }
  class Minecraft {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public getPing(
      options: IGetPingOptions
    ): Promise<IMinecraftResponse | IErrorResponse>;
    public getPingByHost(
      host: string | number
    ): Promise<IMinecraftResponse | IErrorResponse>;
  }
  class SFWImages {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public getAnime(): Promise<IResponse | IErrorResponse>;
    public getChibi(): Promise<IResponse | IErrorResponse>;
    public getNeko(): Promise<IResponse | IErrorResponse>;
    public getNekoBoy(): Promise<IResponse | IErrorResponse>;
    public getNekoPara(): Promise<IResponse | IErrorResponse>;
    public getKitsune(): Promise<IResponse | IErrorResponse>;
    public getHolo(): Promise<IResponse | IErrorResponse>;
    public getAzulane(): Promise<IResponse | IErrorResponse>;
    public getChristmas(): Promise<IResponse | IErrorResponse>;
    public getHalloween(): Promise<IResponse | IErrorResponse>;
    public getMaid(): Promise<IResponse | IErrorResponse>;
    public getDDLC(): Promise<IResponse | IErrorResponse>;
    public getWallpaper(): Promise<IResponse | IErrorResponse>;
  }
  class SFWGifs {
    private client: FluxpointClient;
    constructor(client: FluxpointClient) {
      this.client = client;
    }
    public getBaka(): Promise<IResponse | IErrorResponse>;
    public getBite(): Promise<IResponse | IErrorResponse>;
    public getBlush(): Promise<IResponse | IErrorResponse>;
    public getCry(): Promise<IResponse | IErrorResponse>;
    public getDance(): Promise<IResponse | IErrorResponse>;
    public getFeed(): Promise<IResponse | IErrorResponse>;
    public getFluff(): Promise<IResponse | IErrorResponse>;
    public getGrab(): Promise<IResponse | IErrorResponse>;
    public getHandHold(): Promise<IResponse | IErrorResponse>;
    public getHighFive(): Promise<IResponse | IErrorResponse>;
    public getHug(): Promise<IResponse | IErrorResponse>;
    public getKiss(): Promise<IResponse | IErrorResponse>;
    public getLick(): Promise<IResponse | IErrorResponse>;
    public getNeko(): Promise<IResponse | IErrorResponse>;
    public getPat(): Promise<IResponse | IErrorResponse>;
    public getPoke(): Promise<IResponse | IErrorResponse>;
    public getPunch(): Promise<IResponse | IErrorResponse>;
    public getShrug(): Promise<IResponse | IErrorResponse>;
    public getSlap(): Promise<IResponse | IErrorResponse>;
    public getSmug(): Promise<IResponse | IErrorResponse>;
    public getStare(): Promise<IResponse | IErrorResponse>;
    public getTickle(): Promise<IResponse | IErrorResponse>;
    public getTailWig(): Promise<IResponse | IErrorResponse>;
    public getWasted(): Promise<IResponse | IErrorResponse>;
    public getWave(): Promise<IResponse | IErrorResponse>;
    public getWink(): Promise<IResponse | IErrorResponse>;
  }
}
