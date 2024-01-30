import { createConnectTransport } from "@bufbuild/connect-web";
import { createPromiseClient } from "@connectrpc/connect";
import type { PromiseClient, Transport } from "@connectrpc/connect";
import { BznsProService } from "@buf/ahmeddarwish_bzns-pro-api.connectrpc_es/bznspro/v1/bzns_pro_service_connect"


const transport = createConnectTransport({
  baseUrl: process.env.API!,
  useHttpGet: true
});

const apiClient: PromiseClient<typeof BznsProService> = createPromiseClient(BznsProService, transport as Transport);



export default apiClient
