import { Router } from "express";
import StatusCodes from "http-status-codes";
import AssetService from "../services/Asset.service.js";

// Constants
const router = Router();
const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR, CREATED } = StatusCodes;

// Paths
const path = {
  assets: "/assets",
  asset: "/assets/:assetId",
  ownerAsset: "/assets/owner/:owner",
  history: "/history/:assetId",
  transfer: "/transfer",
  accept: "/accept",
  lock: "/lock/:assetId",
  release: "/release/:assetId",
};

/**
 * Get all assets.
 */
router.get(path.assets, async (_, res) => {
  try {
    const assets = await AssetService.get();
    return res.status(OK).json(assets);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Get single asset by id.
 */
router.get(path.asset, async (req, res) => {
  if (!req.params.assetId)
    return res.status(BAD_REQUEST).json("Asset ID is required!");

  try {
    const assets = await AssetService.getById(req.params.assetId);
    return res.status(OK).json(assets);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Get assets by owner.
 */
router.get(path.ownerAsset, async (req, res) => {
  if (!req.params.owner)
    return res.status(BAD_REQUEST).json("Owner is required!");

  try {
    const assets = await AssetService.getByOwner(req.params.owner);
    return res.status(OK).json(assets);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Get asset transaction history.
 */
router.get(path.history, async (req, res) => {
  if (!req.params.assetId)
    return res.status(BAD_REQUEST).json("Asset ID is required!");

  try {
    const assets = await AssetService.getAssetHistory(req.params.assetId);
    return res.status(OK).json(assets);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Create asset.
 */
router.post(path.assets, async (req, res) => {
  if (req.body.area === "" || req.body.location === "" || req.body.owner === "")
    return res.status(BAD_REQUEST).json("Asset detail is required!");

  try {
    const asset = await AssetService.create(req.body);
    return res.status(CREATED).json(asset);
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Transfer
 */
router.post(path.transfer, async (req, res) => {
  if (req.body.id === "" || req.body.owner === "")
    return res.status(BAD_REQUEST).json("New owner is required!");

  try {
    const tx = await AssetService.transfer(req.body);
    return res.status(OK).json(tx);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Accept
 */
router.post(path.accept, async (req, res) => {
  if (req.body.id === "" || !req.body.id)
    return res.status(BAD_REQUEST).json("Asset ID is required!");

  try {
    const tx = await AssetService.accept(req.body);
    return res.status(OK).json(tx);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Lock
 */
router.post(path.lock, async (req, res) => {
  if (!req.params.assetId)
    return res.status(BAD_REQUEST).json("Asset ID is required!");

  try {
    const tx = await AssetService.lock(req.params.assetId);
    return res.status(OK).json(tx);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

/**
 * Release
 */
router.post(path.release, async (req, res) => {
  if (!req.params.assetId)
    return res.status(BAD_REQUEST).json("Asset ID is required!");

  try {
    const tx = await AssetService.release(req.params.assetId);
    return res.status(OK).json(tx);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
});

export default router;
