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
  const { deleteTransaction } = useContext(ExpenseTrackerContext);

  const transaction = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Web Dec 18",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 510,
      date: "Sat Dec 21",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 1000,
      date: "Mon Dec 10",
    },
  ];
  return (
    <MULIST dense={false} className={classes.list}>
      {transaction.map((trans) => (
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
              <IconButton edge="end" aria-label="delete" onClick="">
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
