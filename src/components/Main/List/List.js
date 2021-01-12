import React, { useContext } from "react";
import {
  List as MULIST,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, trasacations } = useContext(ExpenseTrackerContext);

  return (
    <MULIST dense={false} className={classes.list}>
      {trasacations.map((trans) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={trans.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  trans.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={trans.category}
              secondary={`$${trans.amount} - ${trans.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(trans.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MULIST>
  );
};

export default List;
