import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { datos } from '../../data/datos';
import TableContent from './TableContent';

import './style.css';

const Login =()=> {

    const titles = ['Pick up name','Pick up address','Delivery name','Delivery address','Package Weight','Package dimension'];

    return (
        <>
            <TableContainer id="bulkTable__content">
                <Table size="small" aria-label="a dense table">
                    
                    <TableHead>
                        <TableRow class="bulkTable__headers">       
                            {titles.map(each => <TableCell align="center">{each}</TableCell>)}
                            <TableCell align="center" colSpan={2}>Operations</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            datos.map(each =>(          
                                <TableContent {...each}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Login;
