import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ModalDetails =(obj)=>{

    return(
        <Grid container>
            {/* PickUp data */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card border={2} className="bulkTable__card">
                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>
                        PickUp Data 
                        </Typography>

                    </CardContent>

                    <CardActions>
                    <List>
                        <ListItem>
                            <ListItemText primary="PickUpTitle.&nbsp;" />
                            <ListItemText primary={obj.pickUpTitle} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpName.&nbsp;" />
                            <ListItemText primary={obj.pickUpName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpPhone.&nbsp;" />
                            <ListItemText primary={obj.pickUpPhone} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpCity.&nbsp;" />
                            <ListItemText primary={obj.pickUpCity} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpCountry.&nbsp;" />
                            <ListItemText primary={obj.pickUpCountry} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpLocation.&nbsp;" />
                            <ListItemText primary={obj.pickUpLocation} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpPostal.&nbsp;" />
                            <ListItemText primary={obj.pickUpPostal} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpProvince.&nbsp;" />
                            <ListItemText primary={obj.pickUpProvince} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="PickUpDate.&nbsp;" />
                            <ListItemText primary={obj.pickUpDate} />
                        </ListItem>
                    </List>
                    </CardActions>
                </Card>
            </Grid>
            {/* Delivery data */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card border={2} className="bulkTable__card">
                    <CardContent>

                        <Typography color="textSecondary" gutterBottom>
                        Delivery Data
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <List>
                            <ListItem>
                                <ListItemText primary="DeliveryTitle.&nbsp;" />
                                <ListItemText primary={obj.deliveryTitle} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryPhone.&nbsp;" />
                                <ListItemText primary={obj.deliveryPhone} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryCity.&nbsp;" />
                                <ListItemText primary={obj.deliveryCity} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryCountry.&nbsp;" />
                                <ListItemText primary={obj.deliveryCountry} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryLocation.&nbsp;" />
                                <ListItemText primary={obj.deliveryLocation} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryPostal.&nbsp;" />
                                <ListItemText primary={obj.deliveryPostal} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="DeliveryProvince.&nbsp;" />
                                <ListItemText primary={obj.deliveryProvince} />
                            </ListItem>     
                        </List>

                    </CardActions>
                </Card>
            </Grid>
            {/* Package details */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card border={2} className="bulkTable__card">
                    <CardActions>
                        <List>
                            <ListItem>
                                <ListItemText primary="PackageNumber.&nbsp;" />
                                <ListItemText primary={obj.packageNumber} />
                            </ListItem> 
                        </List>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ModalDetails;