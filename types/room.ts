interface room {
    _id: string;
    title: string;
    rent_amount: number;
    currency: string;
    deposit: number;
    security_amount: number;
    postedTime: Date;
    pictures: string[];
    location: string;
    apartment_type: string;
    like: number | boolean;
}

export default room;