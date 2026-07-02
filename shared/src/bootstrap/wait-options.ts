export interface WaitOptions {

    name: string;

    task: () => Promise<void>;

}