import { Payable } from "../types/Payable";

export type PayableData = Omit<Payable, 'id'>

export interface PayableGateway {
    getAllPayables(): Promise<Payable[]>;
    getPayable(id: string): Promise<Payable>;
    createPayable(payable: PayableData): Promise<void>;
    updatePayable(id: string, payable: PayableData): Promise<void>;
    deletePayable(id: string): Promise<void>;
}