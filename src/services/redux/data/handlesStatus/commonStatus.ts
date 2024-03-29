import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

export const handlePendingData = (state: ISliceData) => {
  state.isLoading = true;
  state.errorData = null;
};

export const handleRejectedData = (
  state: ISliceData,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.errorData = action.payload;
};

export const handleDefaultData = (state: ISliceData) => {
  state.proposals = {
    items: [],
    page: null,
    limit: null,
    total: null,
  };
  state.proposalsPending = [];
  state.proposalsAccepted = [];
  state.proposalsHistory = [];
  state.spots = [];
  state.errorData = null;
  state.isLoading = false;
};
