import { IReferenceable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReconfigurable } from 'pip-services3-commons-node';
import { IOpenable } from 'pip-services3-commons-node';
import { INotifiable } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
export declare class DummyController implements IReferenceable, IReconfigurable, IOpenable, INotifiable {
    private readonly _timer;
    private readonly _logger;
    private _message;
    private _counter;
    constructor();
    message: string;
    counter: number;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    isOpen(): boolean;
    open(correlationId: string, callback?: (err: any) => void): void;
    close(correlationId: string, callback?: (err: any) => void): void;
    notify(correlationId: string, args: Parameters): void;
}
