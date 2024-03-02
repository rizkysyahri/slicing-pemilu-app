export type ExtendedVoting = {
  bgColor: string;
  bgNamePaslon: string;
  name: string;
  paslon: string;
  count: string;
};

export type ExtendedVotingModal = {
  noPaslon: number;
  image: string;
  name: string;
  title: string;
  list: {
    title: string;
    partai: string;
  };
};

export type ListVoterData = {
  no: number;
  name: string;
  address: string;
  gender: string;
  paslon: string;
};

export type IAuth = {
  username: string
  password: string
}
