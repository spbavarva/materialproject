import React from 'react';
import { useParams } from 'react-router-dom';

const Paper = () => {

    const { semester } = useParams();
    return (<div>
        {semester} -Paper
    </div>)

}
export default Paper;
