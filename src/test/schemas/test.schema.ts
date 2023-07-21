import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop({ required: true})
    id: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);