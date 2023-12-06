import {getProviders} from "next-auth/react";

export const ProviderList = async (req, res) => {
  const providers = await getProviders()
  return providers

}
