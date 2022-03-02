const dbName = "TypeMongoAPI";

export default {
  port: 8888,
  dbName,
  dbUri: `mongodb://root:alohomora@localhost:27017/${dbName}?authSource=admin&readPreference=primary&ssl=false`,
  saltWorkFactor: 10,
  accessTokenTtl: "15min",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgF69I1aEpO36RTI36AArVRZbf9R/
yFUwiDcPcljDp9LYfvDo9KjoJ9+dXYB4ql7j122LzSsNwvCMSudc07dBDjfcr5ZG
q7QtP8yKnK2qyVRBIx7pznyhOg7S2JG1cuUDZX4iFxmqA9ViESWsVUeRhCqn9CPc
Rs1Gn1UhGEC6K2RRAgMBAAE=
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgF69I1aEpO36RTI36AArVRZbf9R/yFUwiDcPcljDp9LYfvDo9Kjo
J9+dXYB4ql7j122LzSsNwvCMSudc07dBDjfcr5ZGq7QtP8yKnK2qyVRBIx7pznyh
Og7S2JG1cuUDZX4iFxmqA9ViESWsVUeRhCqn9CPcRs1Gn1UhGEC6K2RRAgMBAAEC
gYADp+bSMuIucMb0ziV8xC9PYo6HQ7sWVn4bKdRuynYSc9pKL6MpVXQcc/UkvQNO
EBrDFm7/Z1OLds55KSLeYntK7nMYgwIDuIuoitU5kD8ZbupYC5Z74ELF+2Xoqer6
VTujx/ORd+S5ruD9JPtolXMq+mTzXio7uWczPV+RkUDOJQJBALCAnUMgxDpj+kpB
PI0NreXftddgAdYuSzil92DDVG/lG8AOA4wSynA4xx+C4VGcaqgcOY29kXzTmEuW
bhMJEk8CQQCJaOC1i6xf1yfwnWakZb3W4e8aEjdNKBUsRwtQ+gqiFK28fvjQ459h
u55tLva2kSicJKshVBnqGDMB9vJ0r5dfAkEAgyvCM/4o9wAQJZkf5/APmbPNDzfh
hYw4COyG0Rm5KcNKAUwo5LOeURJRIaEB1MX7Gd6IA0er1Onn19z/BxSJzwJBAIHT
dXwR22sx/ap5DOGGvzangSFA1L8xf8+10BtSI3m/z+aokK3MYmoUujquhKs5uwTM
IGP88f8bnhXdHHbi8EECQGfn2KPtwgeaipk74dAcMqlOZrJlePHfnSZEIrvsGXsP
zQ102iwvNyzZXHPG19NfA/N0J3t5VDEZWA2kgKAp2FU=
-----END RSA PRIVATE KEY-----`,
};
