import { GIST, GIT, LOCALSTORE } from "../../constants";
import Oxy from "../../oxy"
import { loadStateBulk, saveStateBulk } from "./localStorage";
import { useStore } from "./store";
const { setState, setData } = useStore.getState()

export const Controller = {
    init: async () => {
        const LS = loadStateBulk([LOCALSTORE.config])
        const config = LS[LOCALSTORE.config]
        if(!config) {
            Controller.loadVersion()
            return {status: 'Local Storage Empty, loadVersion Triggered'}
        }
        else {
            setState({ config, loaded: true, version: config.version})
            Controller.syncVersion()
            return {status: 'Loaded from Local Storage'}
        }
    },
    loadVersion: async () => {
        const { version } = await Oxy.getGist(GIST.version)
        console.log("[APPLOAD] Loading Version - ", version)
        const config = await Oxy.getGit(version, GIT.config)
        config.version = version
        saveStateBulk({ [LOCALSTORE.config]: config })
        setState({ config, loaded: true, version })
        return {status: 'Loaded Version ', version}
    },
    syncVersion: async () => {
        const { version : currVersion } = useStore.getState()
        const { version } = await Oxy.getGist(GIST.version, true)
        if(version !== currVersion) {
            console.log('[SYNC] Updating App Version: ', currVersion, '->', version)
            Controller.loadVersion()
            return {status: 'Updating Version ', version}
        } else {
            console.log('[SYNC] App Version: ', currVersion, " No Updates Required")
            return {status: 'Version Synced ', version}
        }
    },
    loadPrivacy: async () => {
        const { version, data: { privacy } } = useStore.getState()
        if(privacy) return {status: 'Privacy Already Loaded'}
        const privacyData = await Oxy.getGit(version, GIT.privacy)
        setData({privacy: privacyData})
        console.log("privacy: ", privacy)
        return {status: 'Loaded Privacy'}
    }
}