import React from 'react';
import {cnEditorBody, IEditorBody} from "./index";
import './Editor-Body.scss';

const EditorBody: React.FC<IEditorBody> = ({className, children}) => (
    <table className={cnEditorBody({}, [className])}>
        <tbody>
        {children}
        </tbody>
    </table>
);

export default EditorBody;