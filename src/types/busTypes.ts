export interface BusTypes {
    id: number;
    name: string;
    route: string;
    image: string;
    speed: string;
    seats: {
        reserved : {
        leftSide: number[];
        rightSide: number[];
        }
    };
}
