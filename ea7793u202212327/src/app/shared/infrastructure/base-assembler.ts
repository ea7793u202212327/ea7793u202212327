import {BaseResource, BaseResponse} from './base-response';
import {BaseEntity} from '../domain/model/base-entity';

/**
  */
export interface BaseAssembler<TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse> {

  toEntityFromResource(resource: TResource): TEntity;

  /**
   * @param entity - The entity to convert.
   * @returns The converted resource.
   */
  toResourceFromEntity(entity: TEntity): TResource;

  /**
   * @param response - Response payload returned by the API.
   * @returns Array of mapped domain entities.
   */
  toEntitiesFromResponse(response: TResponse): TEntity[];
}
