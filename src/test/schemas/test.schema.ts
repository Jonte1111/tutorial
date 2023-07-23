import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({ required: true})
    id: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);